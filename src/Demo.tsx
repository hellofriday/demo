export const Demo = () => {
    const signLink = 'dapp://app.crossspace.io/async/async-sign?sid=52390eb9-858b-44c0-b199-f9e0e92268db'
    const txLink = 'dapp://app.crossspace.io/async/async-trade-keys?address=0x655008151f2dbeb52029Cf051bfaFa0ca7f479c4&abi=tradeAbi&function_name=sellShares&args=%5B%220xA30Eb0e0e2B632Df08a4328604be2fBbFe54B35d%22%2C%226551d203264ad02968234b30%22%2C1%5D&value=0&contractNetwork=80001&feedID=6551d203264ad02968234b30&orderInfo=%7B%22ticketPrice%22%3A%2218000000000000000%22%2C%22creatorKeyQuantity%22%3A%22382556488862933290%22%2C%22keyPrice%22%3A%228050466206443634%22%2C%22fee%22%3A%222605046620644362%22%2C%22totalPrice%22%3A%2223445419585799272%22%2C%22tradeType%22%3A%22sell%22%2C%22amount%22%3A1%7D&sid=6538cd4e-cf33-4602-9e04-1d9f60f3910e'

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