// components/ui/fragments/custom-ui/card/filter-card.tsx - UPDATED

import React from 'react';
import { View } from '../../shadcn-ui/view';
import { THEME } from '@/lib/theme';
import { SearchBar } from '../../shadcn-ui/searchbar';
import { Icon } from '../../shadcn-ui/icon';
import { Filter } from 'lucide-react-native';

interface FilterCardProps {
  onSearch?: (query: string) => void;
  onClear?: () => void;
  searchQuery?: string;
}

export default function FilterCard({ onSearch, onClear, searchQuery = '' }: FilterCardProps) {
  return (
    <View style={{ backgroundColor: THEME.light.primary }} className="w-full gap-3">
      <View className="m-auto w-full max-w-sm flex-row items-end justify-between gap-5 px-1.5 pb-4 pt-0.5">
        <SearchBarWithFilter onSearch={onSearch} onClear={onClear} value={searchQuery} />
      </View>
    </View>
  );
}

interface SearchBarWithFilterProps {
  onSearch?: (query: string) => void;
  onClear?: () => void;
  value?: string;
}

function SearchBarWithFilter({ onSearch, onClear, value }: SearchBarWithFilterProps) {
  const [internalValue, setInternalValue] = React.useState(value || '');

  // ✅ Sync internal value with prop
  React.useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleChange = (text: string) => {
    setInternalValue(text);
  };

  const handleSearch = (query: string) => {
    onSearch?.(query);
  };

  const handleClear = () => {
    setInternalValue('');
    onClear?.();
  };

  return (
    <SearchBar
      placeholder="Cari aktivitas..."
      value={internalValue}
      rightIcon={<Icon as={Filter} size={16} className="text-accent/50" />}
      onChangeText={handleChange}
      onSearch={handleSearch}
      onClear={handleClear}
      showClearButton={true}
      debounceMs={300} // ✅ Debounce 300ms untuk performa
    />
  );
}
