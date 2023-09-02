import * as React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Search } from '@styled-icons/fa-solid/Search';

const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
  margin-right: 10px;
  position: absolute;
  left: 15px;
  color: #3b81f6 !important;
`;

const focus = (props) => css`
  background: white;
  color: ${(props) => props.theme.darkBlue};
  cursor: text;
  width: 5em;
  + ${SearchIcon} {
    color: ${(props) => props.theme.darkBlue};
    margin: 0.3em;
  }
`;

const collapse = (props) => css`
  width: 0;
  cursor: pointer;
  color: ${(props) => props.theme.lightBlue};
  + ${SearchIcon} {
    color: white;
  }
  ${(props) => props.focus && focus()}
  margin-left: ${(props) => (props.focus ? `-1.6em` : `-1em`)};
  padding-left: ${(props) => (props.focus ? `1.6em` : `1em`)};
  ::placeholder {
    color: ${(props) => props.theme.gray};
  }
`;

const expand = (props) => css`
  background: ${(props) => props.theme.veryLightGray};
  width: 6em;
  margin-left: -1.6em;
  padding-left: 1.6em;
  + ${SearchIcon} {
    margin: 0.3em;
  }
`;

const collapseExpand = (props) => css`
  ${(props) => (props.collapse ? collapse() : expand())}
`;

const Input = styled.input`
  color: rgb(2, 132, 199);
  outline: none;
  border: none;
  font-size: 1em;
  background: rgb(241, 245, 249);
  transition: ${(props) => props.theme.shortTrans};
  border-radius: ${(props) => props.theme.smallBorderRadius};

  ${(props) => props.collapseExpand}
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin-left: 15px;
  }
`;

export default connectSearchBox(({ refine, ...rest }) => {
  const preventSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form className={'formElement'} onSubmit={preventSubmit}>
      <SearchIcon />
      <Input
        className={
          'searchInput focus:outline-none text-sky-600 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 font-light tracking-tight p-4 rounded-[30px] shadow-inner bg-slate-100 dark:bg-black/50 border border-slate-300 dark:border-slate-800 dark:shadow-inner focus:border-sky-600 focus:bg-sky-100'
        }
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => refine(e.target.value)}
        {...rest}
      />
    </Form>
  );
});
