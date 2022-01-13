import React from "react"

const Table2 = (props) => {
    const x = parseInt(props.valx);
    const n = parseInt(x / 10);
    const y = x % 10;
    const a = ["", "", "", "", "", "", "", "", "", ""];
    for (var i = 0; i < y; i++) {
        a[i] += (props.array[i] + n * 10);
    }
    if (y != 0) {
        return (
            <table>
                <tbody>
                    <tr className="tabs">
                        <div >
                            <td className="blue">{a[4]}</td>
                            <td className="orange">{a[0]}</td>
                            <td className="green">{a[6]}</td>
                        </div>
                        <div>
                            <td className="green2">{a[7]}</td>
                            <td className="orange2">{a[1]}</td>
                            <td className="orange2">{a[2]}</td>
                            <td className="green2">{a[8]}</td>
                        </div>
                        <div>
                            <td className="green3">{a[9]}</td>
                            <td className="orange3">{a[3]}</td>
                            <td className="blue3">{a[5]}</td>
                        </div>
                    </tr>
                </tbody>
            </table>
        )
    } else {
        return <></>
    }
}

export default Table2;