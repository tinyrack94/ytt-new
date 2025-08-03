import { SUPPORTED_LANGUAGES } from '@/constants';

export default function LanguageSelector() {
  return (
    <div className="mt-2 grid grid-cols-1">
      <select
        id="location"
        name="location"
        defaultValue="Canada"
        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
        onChange={(e) => {
          console.log(e);
        }}
      >
        {Object.values(SUPPORTED_LANGUAGES).map((lang) => (
          <option key={lang.CODE} value={lang.CODE}>
            {lang.NAME}
          </option>
        ))}
      </select>
      {/* <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
        /> */}
    </div>
  );
}
