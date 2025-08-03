import { persistentMap } from "@nanostores/persistent";

export const OPEN_AI_MODELS = {
  GPT_4_O: "gpt-4o",
  GPT_4_O_MINI: "gpt-4o-mini",
  CUSTOM: "custom",
} as const;

export type OpenAIModel = (typeof OPEN_AI_MODELS)[keyof typeof OPEN_AI_MODELS];

export type PreferencesStore = {
  /**
   * @description
   * The OpenAI API endpoint URL.
   */
  openAIEndpoint: string;

  /**
   * @description
   * The OpenAI API key used for authentication.
   * @example "sk-..."
   * @see https://platform.openai.com/docs/api-reference/authentication
   */
  openAIApiKey: string;

  /**
   * @description
   * The model to use for OpenAI API requests.
   * @see https://platform.openai.com/docs/models/overview
   */
  model: OpenAIModel;

  /**
   * @description
   * The custom model to use for OpenAI API requests.
   * This is used when the model is set to "custom".
   * @example "gpt-4o"
   * @see https://platform.openai.com/docs/models/overview
   */
  customModel?: string;

  prompt: string;
  baseLangCode: string;
};

export const preferencesStore = persistentMap<PreferencesStore>(
  "preferences:",
  {
    openAIEndpoint: "https://api.openai.com/v1/chat/completions",
    openAIApiKey: "",
    model: OPEN_AI_MODELS.GPT_4_O,
    prompt:
      "For currency, change it to the local currency based on the exchange rate.",
    baseLangCode: "en",
  },
);
