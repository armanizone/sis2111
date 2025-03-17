import React from 'react';
import { Button } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';

const array = [
  {
    name: 'Проверить Безопасность',
    path: '/'
  },
  {
    name: 'Хэш Пароль',
    path: '/hash-password'
  },
  {
    name: 'Детектор Внедрения',
    path: '/injections-detector'
  },
  {
    name: 'Безопасные Инструкции',
    path: '/safe-insctructions'
  }
]
function App() {

  const { pathname } = useLocation();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
        <div className="w-full flex gap-2 flex-wrap">
          {array.map((item) => (
            <Link to={item.path} key={item.path}>
              <Button type={pathname === item.path ? 'primary' : 'link'} size="large">
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
        <div className='flex justify-center items-center mt-10 md:min-h-[90vh]'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export { App }
