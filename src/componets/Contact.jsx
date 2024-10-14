import React from 'react'
import { useCallback , useState ,  useRef } from 'react'



function Contact() {

  const [password, setPassword] = useState('')
  const [length, setLength] = useState(6)
  const [hasNumber, setHasNumber] = useState(false)
  const [charecter, setCharecter] = useState(false)

  const firstRender = useRef(true)

  const handelPassword = useCallback((e) => { 
      
     let password = ""
     let string = "abcdefghijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUVWXYZ"
     
    if (hasNumber) string += "0123456789"
    if (charecter) string += "!@#$%^&*()_"

    for (let index = 0; index <= length; index++) {
      let random = Math.floor(Math.random() * string.length+1)
      password += string.charAt(Math.floor(random))
      
    }

    setPassword(password)
  }, [charecter, hasNumber, setPassword ,length])

  // useEffect(() => {handelPassword()}, [setPassword , length , hasNumber , charecter])

  const copy = useCallback(() => { 
    firstRender.current.select()
    
    window.navigator.clipboard.writeText(password)
    console.log({password})
  }
  , [password])
  return (
    <div className='text-white pt-20 items-center justify-center h-screen'>
      <h1 className='text-white'>Generate Password</h1>
      <input type="range" min="6" max="99" value={length} onChange={(e) => setLength(e.target.value)} className='text-white' />
      <input type="checkbox" checked={hasNumber} onChange={(e) => setHasNumber(e.target.checked)} className='text-white'/> Include Number
      <input type="checkbox" checked={charecter} onChange={(e) => setCharecter(e.target.checked)} className='text-white'/> Include Charecter
      <button onClick={handelPassword} className='text-white'>Generate Password</button>
      <h2 className='text-white' ref={firstRender}>{password}</h2>
      <input ref={firstRender} value={password} style={{position: 'absolute', left: '-9999px'}} readOnly />
      <button className='text-white'onClick={copy} >copy</button>

    </div>
  )
}

export default Contact
