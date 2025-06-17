export default function FinishPage({ list, opts }) {
    return <div className="finish">
        {list.map((el, i) => {
            return <div className={`ans ${opts[i] ? 
                        typeof opts[i] === "string"
                            ? opts[i] === el.correct ? "correct" : "error" 
                    : (Array.isArray(opts[i]) && Array.isArray(el.correct)) ? opts[i].sort().join("") === el.correct.sort().join("") :"error" 
                    : null}`}>

                <div>Вопрос: {el.topic}</div>
                <div>Ваш ответ: {el.type === "fill"
                    ? opts[i]
                    : Array.isArray(opts[i])
                        ? opts[i].join("") : opts[i]}</div>
                <div>Правильный ответ: {typeof el.correct === "string" ? el.correct : Array.isArray(el.correct) ? el.correct.join("") : null}</div>
            </div>
        })}
    </div>
}
