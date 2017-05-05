import expect from 'expect';
import moment from 'moment';

import {renderDate} from './../../api/renderDate';

describe('renderDate', () => {
  it('should exist', () => {
      expect(renderDate).toExist();
    }
  );
  it('should format date properly', () => {
    const date = new Date;

    const result = renderDate(date);

    expect(result).toEqual(moment(date).format('D MMM YY [at] H:mm'));
  })

});