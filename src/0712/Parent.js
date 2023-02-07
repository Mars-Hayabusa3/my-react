import Child from './Child'

function Parent() {
  return (
    <>
      <Child text="React你好" abc={123} isBook={true}
        foo={() => { alert('Hello!') }} />
    </>
  )
}

export default Parent

// 子元件傳入，父元件利用 props (text="") 提供屬性