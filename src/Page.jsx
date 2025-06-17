import { useEffect, useState } from "react";

const Page = ({ quiz, selectVariant, prev, curr, total }) => {
    const [selectedVariant, setSelectedVariant] = useState(null);

    return (
        <div className="item">
            <div>{curr} из {total}</div>
            {quiz.type === "multi" && <div>hahahah</div>}
            <div className="t1">{quiz.topic}</div>
            <div>{quiz.text}</div>
            {quiz.type === "fill" ? <input className="input" placeholder="Введите блдяский текст..." value={selectedVariant} onChange={(e) => setSelectedVariant(e.target.value)} /> :
                <div className="list">
                    {Object.entries(quiz.options).map(([variant, value]) => {
                        return <div onClick={() => {
                            if (quiz.type === "multi") {
                                if (Array.isArray(selectedVariant)) {
                                    setSelectedVariant(prev => {
                                        for (let i of prev) {
                                            if (i === variant) {
                                                return [...prev.filter(el => el !== variant)];
                                            }
                                        }
                                        return [...prev, variant];
                                    })
                                } else {
                                    return setSelectedVariant([variant]);
                                }
                                return;
                            }
                            setSelectedVariant(variant);
                        }} className={`variant ${variant === selectedVariant
                            ? "select"
                            : quiz.type === "multi"
                                && Array.isArray(selectedVariant) && selectedVariant.includes(variant) ? "select"
                                : null
                            }`}>{variant}) {value}</div>
                    })}
                </div>
            }
            <div className="btns">
                <button className="btn" onClick={() => {
                    setSelectedVariant(null);
                    prev()
                }}>Назад</button>
                <button className="btn" onClick={() => {
                    setSelectedVariant(null);
                    selectVariant(selectedVariant);
                }}>Дальше</button>
            </div>
        </div>
    );
};

export default Page;
