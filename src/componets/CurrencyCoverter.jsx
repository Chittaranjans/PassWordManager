import React, { useState, useEffect } from 'react'

function CurrencyConverter() {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/gh/ismartcoding/currency-api@main/latest/data.json')
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    function InputBox({
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency = "usd",
        amountDisable = false,
        currencyDisable = false,
        className = "",
    }) {
        return (
            <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
                <div className="w-1/2">
                    <label htmlFor={label} className="text-black/40 mb-2 inline-block">
                        {label}
                    </label>
                    <input
                        id={label}
                        className="outline-none w-full bg-transparent py-1.5"
                        type="number"
                        placeholder="Amount"
                        disabled={amountDisable}
                        value={amount}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    />
                </div>
                <div className="w-1/2 flex flex-wrap justify-end text-right">
                    <p className="text-black/40 mb-2 w-full">Currency Type</p>
                    <select
                        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        )
    }

    function App() {
        const [amount, setAmount] = useState(0)
        const [from, setFrom] = useState("usd")
        const [to, setTo] = useState("inr")
        const [convertedAmount, setConvertedAmount] = useState(0)

        const options = Object.keys(data)

        const swap = () => {
            setFrom(to)
            setTo(from)
            setConvertedAmount(amount)
            setAmount(convertedAmount)
        }

        const convert = () => {
            setConvertedAmount(amount * data[to])
        }

        return (
            <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                }}>
                <div className="w-full">
                    <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            convert()
                        }}>
                            <div className="w-full mb-1">
                                <InputBox
                                    label="From"
                                    amount={amount}
                                    currencyOptions={options}
                                    onCurrencyChange={(currency) => setFrom(currency)}
                                    selectCurrency={from}
                                    onAmountChange={(amount) => setAmount(amount)}
                                />
                            </div>
                            <div className="relative w-full h-0.5">
                                <button
                                    type="button"
                                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                    onClick={swap}
                                >
                                    swap
                                </button>
                            </div>
                            <div className="w-full mt-1 mb-4">
                                <InputBox
                                    label="To"
                                    amount={convertedAmount}
                                    currencyOptions={options}
                                    onCurrencyChange={(currency) => setTo(currency)}
                                    selectCurrency={to}
                                    amountDisable
                                />
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                                Convert {from.toUpperCase()} to {to.toUpperCase()}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    return <App />
}

export default CurrencyConverter