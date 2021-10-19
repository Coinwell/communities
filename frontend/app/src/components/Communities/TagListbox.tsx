import React, { useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';

import { useStores } from '../../store';
import Tag from './Tag';

const TagListbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const { ui } = useStores();

  function isSelected(value: any) {
    return selectedTags.find(el => el === value) ? true : false;
  }

  useEffect(() => {
    if (selectedTags) {
      ui.tags.map((t: any) => {
        if (isSelected(t)) {
          t.checked = 'on';
        } else {
          t.checked = 'off';
        }

        return t;
      });
    }
  }, [selectedTags]);

  function handleSelect(value: any) {
    if (!isSelected(value)) {
      const selectedTagsUpdated = [
        ...selectedTags,
        ui.tags.find(el => el === value)
      ] as any;
      setSelectedTags(selectedTagsUpdated);
    } else {
      handleDeselect(value);
    }

    setIsOpen(true);

    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth'
    // });
  }

  function handleDeselect(value: any) {
    const selectedTagsUpdated = selectedTags.filter(el => el !== value);
    setSelectedTags(selectedTagsUpdated);
    setIsOpen(true);
  }

  return (
    <div className='flex items-center justify-center tag-selector'>
      <div className='w-full'>
        <Listbox
          as='div'
          className='space-y-1 w-full'
          value={selectedTags}
          onChange={value => handleSelect(value)}
          // open={isOpen}
        >
          {({ open }) => (
            <>
              <div className='relative w-full'>
                <span className='inline-block rounded-sm shadow-sm w-full'>
                  <Listbox.Button
                    className='cursor-default w-full md:w-80 relative rounded-sm border border-gray-200 bg-white pl-3 pr-10 py-2 text-left focus:outline-none transition ease-in-out duration-150 text-md sm:leading-5'
                    onClick={() => setIsOpen(!isOpen)}
                    // open={isOpen}
                  >
                    <span className='block truncate text-gray-400'>
                      {selectedTags.length < 1
                        ? 'Select tag'
                        : `Selected tags (${selectedTags.length})`}
                    </span>
                    <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                      <svg
                        className='h-5 w-5 text-gray-400'
                        viewBox='0 0 20 20'
                        fill='none'
                        stroke='currentColor'
                      >
                        <path
                          d='M7 7l3-3 3 3m0 6l-3 3-3-3'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                  </Listbox.Button>
                </span>
                <Transition
                  unmount={false}
                  show={open}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                  className='absolute mt-1 w-full rounded-sm bg-white shadow-lg z-50'
                >
                  <Listbox.Options
                    static
                    className='max-h-60 rounded-sm py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none text-md sm:leading-5'
                  >
                    {ui.tags.map(tag => {
                      const selected = isSelected(tag);
                      return (
                        <Listbox.Option
                          key={tag.label}
                          value={tag}
                          // className='hover:bg-red-700'
                        >
                          {({ active }) => (
                            <div
                              className={`${
                                active
                                  ? 'text-gray-900 bg-gray-200'
                                  : 'text-gray-900'
                              } cursor-default select-none relative py-2 pl-4 pr-8`}
                            >
                              <div className='flex items-center'>
                                <Tag type={tag.label} iconOnly />
                                <span className={`block truncate`}>
                                  {tag.label}
                                </span>
                              </div>

                              {selected && (
                                <span
                                  className={`text-blue-400 absolute pr-1.5`}
                                  style={{ top: 12, right: 5 }}
                                >
                                  <svg
                                    className='h-5 w-5'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                  >
                                    <path
                                      fillRule='evenodd'
                                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                      clipRule='evenodd'
                                    />
                                  </svg>
                                </span>
                              )}
                            </div>
                          )}
                        </Listbox.Option>
                      );
                    })}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
    </div>
  );
};

export default TagListbox;
