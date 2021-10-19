/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { observable, action } from 'mobx';

import tags from '../components/Communities/Tags';

const tagLabels = Object.keys(tags);
const initialTags = tagLabels.map(label => {
  return <SelectableOption>{ label };
});

export type SelectableOptionCheckedType = 'on' | 'off' | undefined;

export interface SelectableOption {
  label: string;
  checked?: SelectableOptionCheckedType;
}

class UiStore {
  @observable ready: boolean = true;
  @action setReady(ready: boolean) {
    this.ready = ready;
  }

  @observable tags: SelectableOption[] = initialTags;
  @action setTags(t: SelectableOption[]) {
    this.tags = t;
  }

  @observable searchText: string = '';
  @action setSearchText(s: string) {
    this.searchText = s;
  }
}

export const uiStore = new UiStore();
