import {
    StyledSearchButton,
    SearchIcon,
    HiddenLabel,
} from "./SearchBtn.styled";

export const SearchButton = () => (
  <StyledSearchButton type="submit">
    <HiddenLabel>Search</HiddenLabel>
    <SearchIcon />
  </StyledSearchButton>
);