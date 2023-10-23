import { render, screen } from "@testing-library/react";
import { AreaRangeChart } from "../../../components";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import { BARCHART , BOXCHART , AREACHART , SCATERCHART} from "../../../constant/default";
const mockStore = configureStore([]);

const store = mockStore({
    charts: {
      barChart: BARCHART,
      boxChart: BOXCHART,
      areaChart: AREACHART,
      scaterChart: SCATERCHART,
    },
    layouts : {
      counts : 4,
      compactionType : 'horizontal',
      layouts : [
          { i: `item-1`, x: 0, y: 0,  w: 1, h: 14, item : 'Bar Chart' ,      data : BARCHART},
          { i: `item-2`, x: 1, y: 0,  w: 1, h: 14, item : 'Area Range Chart', data :  AREACHART},
          { i: `item-3`, x: 0, y: 1,  w: 1, h: 14, item : 'Box Whisker Plot' , data : BOXCHART},
          { i: `item-4`, x: 1, y: 1,  w: 1, h: 14, item : 'Scater Chart' , data : SCATERCHART}
      ]
    },
    initialSettings : {
      chat : false,
      cart : false,
      notifications : false,
      profile : false,
      sidebar : false,
      activeMenu : false
  }
});



describe('AreaRangeChart', () => {
  test('renders a loading message when no chart data is not available', () => {
    render(<Provider store={store}>
              <AreaRangeChart fromDashboardComponent={false}></AreaRangeChart>
          </Provider>)

    // Verify that the loading message is rendered
    const loadingElement = screen.getByText('Loading...');
    expect(loadingElement).toBeInTheDocument();
  });
});
