'use client'
 
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function page() {
    const pathname = usePathname()
  const searchParams = useSearchParams()
 
  useEffect(() => {
    const url = searchParams
   
  }, [])
  return (
 <div>
    skill id   {searchParams}
 </div>
  )
}
