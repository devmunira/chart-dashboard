import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chartUpdate } from "../store/chart/actions";
import { layoutUpdate } from "../store/layout/actions";

const useChartUpdate = ({content , type , chartRef , fromDashboardComponent}) => {
  // Initial State Declare 
  const initialState = {
    title : fromDashboardComponent ? content.data.title.text : content.title.text,
    subtitle : fromDashboardComponent ? content.data.subtitle.text :  content.subtitle.text,
  }
  // Handle Update Form Data State
  const [filter, setFilter] = useState({...initialState});

  const {layouts} = useSelector(state => state.layouts)

  const dispatch = useDispatch();

  const updateData = (e) => {
    e.preventDefault();
    if(!fromDashboardComponent){
      const updatedChart = {...content}
      updatedChart.title.text = filter.title
      updatedChart.subtitle.text = filter.subtitle
      // Update State
      dispatch(chartUpdate({type, data : updatedChart}))
    }else{
      const layoutupdatedChart = {...content}
      layoutupdatedChart.data.title.text = filter.title
      layoutupdatedChart.data.subtitle.text = filter.subtitle;
      
      const Updatedlayout = [...layouts]
      Updatedlayout.map((item) => {
        console.log(item.i , content.i)
        if(item.i === content.i){
          item = {...layoutupdatedChart}
        }
        return item;
      });
      console.log(Updatedlayout)
      // Update State
      dispatch(layoutUpdate([...Updatedlayout]))
    }
  }

  return{
    filter,
    setFilter,
    updateData
  }
}

export default useChartUpdate;