import { useState, useEffect } from "react";

    const Timer = () =>{
        const [time1,setTime1] = useState(0);
        const [time2,setTime2] = useState(0);
        const [time3,setTime3] = useState(0);
        const [lap,setLap] = useState(0);
        useEffect(()=>{
            const set1 = setInterval(() => {
                setTime1((prevTime1) => (prevTime1 + 1)%60);
                setTime2(Math.trunc((time1+ 1)/60));
            }, 1000);
            return () => clearInterval(set1);
        },[lap]);
        const nuevoTiempo = () =>{
            setTime1(0)
            setTime2(0)
            setTime3(0)
            setLap(lap + 1)
        }
        return(
            <section>
            <div><span>Time: {time3}:{time2}:{time1}</span></div>
            <button className="btn" onClick={nuevoTiempo}>Reset</button>
            </section>
        )
    }
    export default Timer