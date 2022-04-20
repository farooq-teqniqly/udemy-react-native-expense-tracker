import {createContext, useState} from "react";

export const ExpensePeriodContext = createContext({
    period: 0,
    updatePeriod: (newPeriod) => {}
});


function ExpensePeriodProvider({children}) {
    const [period, setPeriod] = useState(7);

    function updatePeriod(newPeriod) {
        setPeriod(newPeriod);
    }

    const value = {
        period: period,
        updatePeriod: updatePeriod
    }

    return (
        <ExpensePeriodContext.Provider value={value}>
            {children}
        </ExpensePeriodContext.Provider>
    )
}

export default ExpensePeriodProvider;