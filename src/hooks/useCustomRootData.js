import axios from 'axios';
import { createContext, ReactNode, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';

// cria os dados do contexto
const CreateData = () => {
  const tableHeader = ['ID', 'City', 'Abbreviation', 'Conference', 'Division', '']

  // const [tableData, setTableData] = useState([]);
  const [tableData, setTableData] = useReducer((state, action) => {
    const currentStep = state.step;
    const currentPage = state.page;
    let nextPage
    let nextSlice
    switch (action.type) {
      case 'insert':
        return {
          ...state,
          data: action.data.slice(0, 4),
          fullData: action.data
        };
      case 'increment':
        if (state.page * state.step > state.fullData.length) return ({ ...state })
        nextPage = state.page + 1;
        nextSlice = state.fullData.slice(currentPage * currentStep, nextPage * currentStep)
        return { ...state, page: nextPage, data: nextSlice };
      case 'decrement':
        if (state.page * state.step < 1) return ({ ...state })
        nextPage = state.page - 1;
        nextSlice = state.fullData.slice(nextPage * currentStep, currentPage * currentStep)
        return { ...state, page: nextPage, data: nextSlice };
      default:
        throw new Error();
    }
  }, { data: [], fullData: [], page: 1, step: 4 });

  const getNBATeamData = async () => {
    const response = await axios.get('https://www.balldontlie.io/api/v1/teams');
    // const tempData = await response.data.data.slice(1, 5);
    const tempData = await response.data.data
    // setTableData(tempData);
    setTableData({ type: 'insert', data: tempData })
  };

  useEffect(() => {
    getNBATeamData();
  }, []);

  return { tableHeader, tableData, setTableData };
}

// cria contexto e provedor
// createContext -> { Provider , Consumer, displayName }
const MyContext = createContext({})
MyContext.displayName = 'MyContext';

export function MyContextProvider({ children }) {
  const data = CreateData()
  return (
    <MyContext.Provider value={data}>
      {children}
    </MyContext.Provider>
  );
}

// custom hook para evitar de ter que importar o contexto
export function useCustomRootData() {
  const context = useContext(MyContext);
  return context;
}