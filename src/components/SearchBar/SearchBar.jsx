import { Component } from 'react';
import propTypes from 'prop-types';
import { Notify } from 'notiflix';
import { SearchForm, Input } from './SearchBar.styled';
import { StyledButton } from 'common/commonButton.styled';
class SearchBar extends Component {
  static propTypes = {
    onSubmit: propTypes.func.isRequired,
  };
  getInputValueOnFormSubmit = event => {
    event.preventDefault();
    const { query } = event.currentTarget.elements;
    if (query.value.trim() === '') {
      Notify.info('Please fill the field');
      return;
    }

    this.props.onSubmit(query.value);
  };
  render() {
    return (
      <>
        <header className="searchbar">
          <SearchForm
            className="form"
            onSubmit={this.getInputValueOnFormSubmit}
          >
            <StyledButton type="submit" className="button">
              <span className="button-label">Search</span>
            </StyledButton>

            <Input
              className="input"
              name="query"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              required
            />
          </SearchForm>
        </header>
      </>
    );
  }
}
export default SearchBar;
