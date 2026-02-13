import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// 페이지 컴포넌트 import
import { Home } from '../pages/Home'
//import { Products } from '../pages/Products'

// 향후 추가할 페이지들
// import { About } from '../pages/About'
// import { Contact } from '../pages/Contact'
// import { Cart } from '../pages/Cart'
// import { ProductDetail } from '../pages/ProductDetail'

/**
 * 라우터 설정
 * 각 경로와 해당 컴포넌트를 매핑합니다
 */
export const router = createBrowserRouter([
  {
    // 홈 페이지
    path: '/',
    element: <Home />,
    errorElement: <div className="text-center text-2xl mt-20">404 - 페이지를 찾을 수 없습니다</div>
  },
  
//   {
//     // 상품 상세 페이지 (예정)
//     path: '/products/:id',
//     element: <div className="text-center mt-20">상품 상세 페이지 - 준비 중</div>
//     // element: <ProductDetail />
//   },
//   {
//     // 장바구니 페이지 (예정)
//     path: '/cart',
//     element: <div className="text-center mt-20">장바구니 페이지 - 준비 중</div>
//     // element: <Cart />
//   },
//   {
//     // 소개 페이지 (예정)
//     path: '/about',
//     element: <div className="text-center mt-20">소개 페이지 - 준비 중</div>
//     // element: <About />
//   },
//   {
//     // 문의 페이지 (예정)
//     path: '/contact',
//     element: <div className="text-center mt-20">문의 페이지 - 준비 중</div>
//     // element: <Contact />
//   },
  {
    // 404 에러 페이지
    path: '*',
    element: (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
        <a 
          href="/" 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          홈으로 돌아가기
        </a>
      </div>
    )
  }
])

/**
 * RouterProvider로 감싸서 내보내기
 */
export function Router() {
  return <RouterProvider router={router} />
}

export default Router
