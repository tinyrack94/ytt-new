import { LanguageIcon } from '@heroicons/react/16/solid';
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/ui/dropdown';
import { NavbarItem } from '@/components/ui/navbar';
import { SUPPORTED_LANGUAGES } from '@/constants';

export type LanguageSelectorProps = {};

export function LanguageSelector(props: LanguageSelectorProps) {
  return (
    <Dropdown>
      <DropdownButton>
        <LanguageIcon color="black" />
      </DropdownButton>
      <DropdownMenu className="min-w-64" anchor="bottom end">
        {Object.values(SUPPORTED_LANGUAGES).map((lang) => {
          const basePathname = window.location.pathname
            .split('/')
            .slice(2)
            .join('/');
          return (
            <DropdownItem
              key={lang.CODE}
              href={`/${lang.CODE}/${basePathname}${window.location.search}`}
            >
              <DropdownLabel>{lang.NAME}</DropdownLabel>
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}
