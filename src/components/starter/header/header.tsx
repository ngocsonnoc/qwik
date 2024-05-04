import { component$ } from "@builder.io/qwik";

import { NavLink } from "~/components/nav-link";

import logo from '~/media/images/2margin-logo-test.svg'
import pressIcon from '~/media/images/press-icon.png'
import navMoneyTrading from '~/media/images/nav-money.png'
import navFolder from '~/media/images/nav-folder.png'
import searchIcon from '~/media/images/Search.png'
import noti from '~/media/images/noti.png'
import headphone from '~/media/images/Headphone.png'
import setting from '~/media/images/Vector.png'

const headerMenu = [
  {
    name: 'Đặt lệnh cơ sở',
    icon: pressIcon,
    link: '/order-base/'
  },
  {
    name: 'Lãi lỗ thực hiện',
    icon: navMoneyTrading,
    link: '/realized-profit-and-lost/'
  },
  {
    name: 'Giao dịch tiền',
    icon: navFolder,
    link: '/money-trading/'
  },

]

export default component$(() => {
  return (
    <header class={'w-full flex justify-between items-center h-[36px] bg-dark-main px-[8px]'}>
      <div class='flex h-full items-center gap-[16px]'>
        <NavLink href='/' class='flex items-end p-[4px]'>
          <img src={logo} alt="logo" width={93} height={30} />
        </NavLink>
        <div class='flex items-center h-full'>
          {
            headerMenu.map((item, index) => (
              <NavLink href={item.link}
                class='flex items-center gap-[8px] h-full px-[12px]'
                activeClass="bg-active-route"
                key={index}
              >
                <div class='w-[20px] h-[20p]'>
                  <img src={item.icon} alt="" width={20} height={20} />
                </div>
                <span class='text-white
                uppercase font-semibold'>
                  {item.name}
                </span>
              </NavLink>
            ))
          }
        </div>
      </div>
      <div class='flex items-center h-[28px] gap-[16px]'>
        <div class='w-[24px] h-[24px] flex justify-center items-center cursor-pointer'>
          <img src={searchIcon} alt="" width={24} height={24} class='object-contain' />
        </div>
        <div class='w-[24px] h-[24px] flex justify-center items-center cursor-pointer'>
          <img src={noti} alt="" width={24} height={24} class='object-contain' />
        </div>
        <div class='w-[24px] h-[24px] flex justify-center items-center cursor-pointer'>
          <img src={headphone} alt="" width={24} height={24} class='object-contain' />
        </div>
        <div class='w-[24px] h-[24px] flex justify-center items-center cursor-pointer'>
          <img src={setting} alt="" width={24} height={24} class='object-contain' />
        </div>

      </div>
    </header>
  );
});
