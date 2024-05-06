import { $, component$, useStore } from '@builder.io/qwik'

import { Dialog } from '../ui/dialog'

import ArrowDown from '~/components/icons/ArrowDown'
import { NavLink } from '~/components/nav-link'
import Button from '~/components/ui/button'
import logo from '~/media/images/2margin-logo-test.svg'
import exclude from '~/media/images/svg/exclude.svg'
import navFolder from '~/media/images/svg/folder.svg'
import navMoneyTrading from '~/media/images/svg/money.svg'
import noti from '~/media/images/svg/noti.svg'
import pressIcon from '~/media/images/svg/press.svg'
import searchIcon from '~/media/images/svg/search.svg'
import setting from '~/media/images/svg/setting.svg'
import headphone from '~/media/images/svg/support.svg'
import wallet from '~/media/images/svg/wallet.svg'

const headerMenu = [
  {
    name: 'Tổng quan',
    icon: exclude,
    link: '/overview/'
  },
  {
    name: 'Đặt lệnh',
    icon: pressIcon,
    link: '/order-base/'
  },
  {
    name: 'Danh mục đầu tư',
    icon: wallet,
    link: '/investment-portfolio/'
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
  }
]

export default component$(() => {
  const store = useStore({
    isDialogOpen: false
  })

  console.log('store.isDialogOpen>>', store.isDialogOpen)

  return (
    <>
      <header class={'w-full flex justify-between items-center h-[36px] bg-dark-main px-[8px]'}>
        <div class='flex h-full items-center gap-[16px]'>
          <NavLink href='/' class='flex items-end p-[4px]'>
            <img src={logo} alt='logo' width={93} height={30} />
          </NavLink>
          <div class=' items-center h-full hidden lg:flex'>
            {headerMenu.map((item, index) => (
              <NavLink
                href={item.link}
                class='flex items-center gap-[8px] h-full px-[12px]'
                activeClass='bg-active-route'
                key={index}
              >
                <div class='w-[20px] h-[20px]'>
                  <img src={item.icon} alt='' width={20} height={20} />
                </div>
                <span class='text-white uppercase font-bold h-[20p] whitespace-nowrap'>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
        <div class='flex items-center h-[28px] gap-[16px]'>
          <div class='w-[24px] h-[24px] flex justify-center items-center cursor-pointer'>
            <img src={searchIcon} alt='' width={24} height={24} class='object-contain' />
          </div>
          <div class='w-[24px] h-[24px] flex justify-center items-center cursor-pointer'>
            <img src={noti} alt='' width={24} height={24} class='object-contain' />
          </div>
          <div class='w-[24px] h-[24px] flex justify-center items-center cursor-pointer'>
            <img src={headphone} alt='' width={24} height={24} class='object-contain' />
          </div>
          <div class='w-[24px] h-[24px] flex justify-center items-center cursor-pointer'>
            <img src={setting} alt='' width={24} height={24} class='object-contain' />
          </div>
          <Button variant='yellow-primary' onClick$={$(() => (store.isDialogOpen = !store.isDialogOpen))}>
            Đăng nhập <ArrowDown />
          </Button>
        </div>
      </header>
      <Dialog
        open={store.isDialogOpen}
        onOpenChange={$((value: boolean) => {
          store.isDialogOpen = value
        })}
        title='Cài đặt'
      ></Dialog>
    </>
  )
})
