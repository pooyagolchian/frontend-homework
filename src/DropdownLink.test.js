import { shallow } from 'enzyme'
import DropdownLink from './DropdownLink'

describe('<DropdownLink />', () => {
  it('renders link', () => {
    expect(shallow(<DropdownLink />)).toMatchSnapshot()
  })
})