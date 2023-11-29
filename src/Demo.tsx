export const Demo = () => {
    const signLink = ''
    const txLink = ''

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '50px', alignItems: 'center', marginTop: '50px'}}>
            <button onClick={()=>{
                setTimeout(()=>{
                    window.open(signLink)
                }, 10)
            }}>sign message</button>
            <button onClick={()=>{
                setTimeout(()=>{
                    window.open(txLink)
                }, 10)
            }}>pay</button>
        </div>
    )
}