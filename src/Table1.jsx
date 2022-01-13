import React from "react";

const Table1 = (props) => {
    console.log("ho raha hai")
    console.log(props.array)
    const x = parseInt(props.valx);
    const n = parseInt(x / 10);
    const b = [""];
    for (let i = 0; i < n; i++) {
        b[i] = i;
    }
    console.log(b)
    return (
        b.map((i) => {
            return (

                < table >
                    <tbody>
                        <tr className="tabs">
                            <div>
                                <td className="blue">{props.array[4] + i * 10}</td>
                                <td className="orange">{props.array[0] + i * 10}</td>
                                <td className="green">{props.array[6] + i * 10}</td>
                            </div>
                            <div>
                                <td className="green2">{props.array[7] + i * 10}</td>
                                <td className="orange2">{props.array[1] + i * 10}</td>
                                <td className="orange2">{props.array[2] + i * 10}</td>
                                <td className="green2">{props.array[8] + i * 10}</td>
                            </div>
                            <div>
                                <td className="green3">{props.array[9] + i * 10}</td>
                                <td className="orange3">{props.array[3] + i * 10}</td>
                                <td className="blue3">{props.array[5] + i * 10}</td>
                            </div>
                        </tr>
                    </tbody>
                </table >

            )


        }))






}

export default Table1;