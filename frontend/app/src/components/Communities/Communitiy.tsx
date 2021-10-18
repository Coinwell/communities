import React, { useRef, useState } from 'react';
import { QRCode } from 'react-qr-svg';

import { QrcodeIcon, ChevronDownIcon, XIcon } from '@heroicons/react/outline';
import moment from 'moment';

import Tag from './Tag';

const DEFAULT_DOMAIN_BUNDLE_URL = 'zion.chat';

function makeQR(uuid: string) {
  return `${DEFAULT_DOMAIN_BUNDLE_URL}://?action=tribe&uuid=${uuid}&host=${window.location.hostname}`;
}

const Community = ({
  uuid,
  name,
  img,
  tags,
  description,
  owner_alias,
  price_to_join,
  price_per_message,
  member_count,
  last_active
}: any) => {
  const showTags = tags && tags.length && tags.length > 0 ? true : false;

  const qrString = makeQR(uuid);
  const [copied, setCopied] = useState(false);
  const [isActive, setActive] = useState(false);

  const lastActiveM = last_active
    ? moment(last_active * 1000)
    : moment().subtract(1, 'months');
  const lastActive = lastActiveM.format('MMM D HH:mm');

  function copyString(e: any) {
    e.stopPropagation();
    document.execCommand('copy');
    setCopied(true);
    setTimeout(() => setCopied(false), 2700);
  }

  function toggleClass() {
    setActive(!isActive);
  }

  return (
    <div
      id='communtiy-card'
      className={`flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto community-item flip-card ${
        isActive ? 'active' : null
      }`}
    >
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <div className='overflow-hidden rounded-xl relative transition ease-in-out duration-500 shadow-lg hover:shadow-2xl text-white w-full'>
            <div className='absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent'></div>
            <div
              className='relative cursor-pointer group z-10 px-10 pt-10 space-y-6'
              style={{ minHeight: 520 }}
            >
              <div className='poster__info align-self-end w-full'>
                <div className='h-36'></div>
                <div className='space-y-4 pb-5 detail_info'>
                  <div className='flex flex-col space-y-2 inner'>
                    <h3
                      className='text-2xl font-bold text-white'
                      data-unsp-sanitized='clean'
                    >
                      {name}
                    </h3>
                  </div>
                  <div className='flex flex-row justify-between datos'>
                    <div className='flex flex-col datos_col'>
                      <div className='owner'>{owner_alias}</div>
                      <div className='text-sm text-gray-400'>Owner</div>
                    </div>
                    <div className='flex flex-col datos_col'>
                      <div className='last-active'>{lastActive}</div>
                      <div className='text-sm text-gray-400'>Last Activity</div>
                    </div>
                    <div className='flex flex-col datos_col'>
                      <div className='member-count'>{member_count}</div>
                      <div className='text-sm text-gray-400'>Members</div>
                    </div>
                  </div>
                  <div className='flex flex-col overview'>
                    <div className='flex flex-col'></div>
                    <div className='text-xs text-gray-400 mb-2'>
                      Description:
                    </div>
                    <p className='text-sm text-gray-100 mb-6 line-clamp-3'>
                      {description}
                    </p>
                  </div>

                  {showTags && (
                    <div
                      className='flex items-center flex-wrap'
                      style={{ marginTop: 0 }}
                    >
                      {tags.map((t: string) => (
                        <span
                          key={t}
                          className='text-sm rounded-md bg-gray-800 py-1 px-2 mr-1 mb-1'
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <img
              className='absolute inset-0 transform w-full -translate-y-4'
              src={img}
              alt='community avatar'
              style={{ filter: 'grayscale(0)' }}
            />
            <div className='poster__footer flex flex-row relative pb-10 space-x-4 z-10'>
              <button
                className='flex items-center justify-center py-2 px-4 rounded-full mx-auto w-40 text-white bg-orange hover:bg-orange-light'
                onClick={toggleClass}
              >
                <div className='w-5 h-5'>
                  <QrcodeIcon />
                </div>
                <div className='text-sm text-white ml-2'>Join</div>
              </button>
            </div>
          </div>
        </div>
        <div className='flip-card-back'>
          <div className='overflow-hidden rounded-xl relative transition ease-in-out duration-500 shadow-lg hover:shadow-2xl text-white w-full h-full'>
            <div className='absolute z-20' style={{ top: 4, right: 8 }}>
              <button
                className='flex items-center justify-center py-2 px-2 rounded-full mx-auto text-white bg-transparent close-btn'
                onClick={toggleClass}
              >
                <div className='w-6 h-6'>
                  <XIcon color='#eb5600' />
                </div>
              </button>
            </div>

            <div className='pt-10 px-10'>
              <QRCode
                bgColor='#fff'
                level='Q'
                style={{ width: '100%', height: '100%' }}
                value={qrString}
              />
            </div>

            <div className='relative cursor-pointer group z-10 px-10 pt-6'>
              <div className='poster__info align-self-end w-full'>
                <div className='space-y-6 detail_info'>
                  <div className='flex flex-row justify-between datos'>
                    <div className='flex flex-col datos_col'>
                      <div className='text-gray-500 last-active'>
                        {price_to_join || 0}
                      </div>
                      <div className='text-sm text-gray-600'>Price to Join</div>
                    </div>
                    <div className='flex flex-col datos_col'>
                      <div className='text-gray-500 member-count'>
                        {price_per_message || 0}
                      </div>
                      <div className='text-sm text-gray-600'>
                        Price per message
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col overview'>
                    <div className='flex items-center justify-between mb-2'>
                      <a
                        href={qrString}
                        className='flex items-center justify-center py-2 px-4 text-xs rounded-full mx-4 w-full text-white bg-orange hover:bg-orange-light'
                      >
                        <img
                          style={{ width: 13, height: 13, marginRight: 8 }}
                          src='static/launch-24px.svg'
                          alt=''
                        />
                        <p>Join</p>
                      </a>

                      <div>
                        <button
                          className='bg-gray-200 text-gray-400 text-sm px-4 py-2 rounded-full'
                          onClick={e => copyString(e)}
                        >
                          {copied ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <img
              className='absolute inset-0 transform w-full -translate-y-4'
              src={img}
              alt='community avatar'
              style={{ filter: 'grayscale(0)' }}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
