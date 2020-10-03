import React from "react";
import styled from "styled-components";
import { XCircle } from "react-feather";

const StyledList = styled.ul`
  overflow: scroll;
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
`;

const StyledListItemDeleteButton = styled.button`
  border: none;
  background-color: transparent;
  color: var(--color-light-gray);
`;

const StyledIconContainer = styled.div`
  width: 1em;
  padding-right: 1.2em;
  &:hover {
    color: var(--color-danger);
  }
`;

export default function List({ items, handleDelete }) {
  return (
    <StyledList className="list">
      {items.map((item, index) => {
        return (
          <StyledListItem key={index} className="list-item">
            {item}{" "}
            <StyledListItemDeleteButton
              className="list-item-delete-button"
              onClick={() => handleDelete(index)}
            >
              <StyledIconContainer>
                <XCircle />
              </StyledIconContainer>
            </StyledListItemDeleteButton>
          </StyledListItem>
        );
      })}
    </StyledList>
  );
}
