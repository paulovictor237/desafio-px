import axios from 'axios';
import { createContext, ReactNode, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';

// cria os dados do contexto
const CreateData = () => {
  const tableHeader = ['ID', 'City', 'Abbreviation', 'Conference', 'Division', '']

  // const [tableData, setTableData] = useState([]);
  const [tableData, setTableData] = useReducer((state, action) => {
    const currentStep = state.step;
    const currentPage = state.page;
    const nextPage = state.page + 1
    const previous = state.page - 1;
    let nextSlice
    switch (action.type) {
      case 'insert':
        return {
          ...state,
          data: action.data.slice(0, state.step),
          fullData: action.data,
          maxPages: (action.data.length / state.step)
        };
      case 'increment':
        if (nextPage > state.maxPages) return ({ ...state })
        nextSlice = state.fullData.slice(
          nextPage * currentStep,
          (nextPage + 1) * currentStep
        )
        return { ...state, page: nextPage, data: nextSlice };
      case 'decrement':
        if (previous < 0) return ({ ...state })
        nextSlice = state.fullData.slice(
          previous * currentStep,
          currentPage * currentStep
        )
        return { ...state, page: previous, data: nextSlice };

      case 'jumpToPage':
        if (action.page > state.maxPages || action.page < 0) return ({ ...state })
        nextSlice = state.fullData.slice(
          action.page * currentStep,
          (action.page + 1) * currentStep
        )
        return { ...state, page: action.page, data: nextSlice };

      default:
        throw new Error();
    }
  }, { data: [], fullData: [], page: 0, step: 4, maxPages: 0 });

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