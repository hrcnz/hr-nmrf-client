import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette } from 'styled-theme';
import ItemStatus from 'components/ItemStatus';
import Clear from 'components/styled/Clear';

const Styled = styled.button`
  width:100%;
  cursor: pointer;
  text-align: left;
  color: ${palette('mainListItem', 0)};
  background-color: ${palette('mainListItem', 1)};
  margin: 0;
  padding: 0.75em 0;
  display: block;
  margin-bottom: 2px;
  line-height: 1.428571429;
  &:hover {
    color: ${palette('mainListItemHover', 0)};
    background-color: ${palette('mainListItemHover', 1)};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    padding: 1em 0;
  }
`;
const Column = styled.div`
  width: ${(props) => props.colWidth}%;
  display: inline-block;
  vertical-align: middle;
`;
const BarWrap = styled.div`
  width:100%;
  vertical-align: middle;
  padding-left: 40px;
  padding-right: ${(props) => props.secondary ? 36 : 18}px;
`;
const Bar = styled.div`
  width:${(props) => props.length}%;
  height: 15px;
  background-color: ${(props) => palette(props.palette, props.pIndex || 0)};
  vertical-align: middle;
  display: inline-block;
  position: relative;
  border-right: ${(props) => props.secondary ? '1px solid' : 0};
  border-right-color: ${palette('mainListItem', 1)};
  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    height: 25px;
  }
`;
const Count = styled.div`
  font-weight: bold;
  position: absolute;
  font-size: ${(props) => props.theme.sizes.text.aaLargeBold};
  line-height: 15px;
  right: 100%;
  text-align: right;
  padding-right: 5px;
  color: ${(props) => palette(props.palette, 0)};
  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    line-height: 25px;
  }
`;
const CountSecondary = styled(Count)`
  left: 100%;
  text-align: left;
  padding-right: 0;
  padding-left: 5px;
  color: ${(props) => palette(props.palette, 1)};
`;
const Title = styled.div`
  display: inline-block;
  padding: 0 8px;
  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    padding: 0 18px;
    font-size: ${(props) => props.theme.sizes.text.aaLargeBold};
  }
`;
const StatusWrap = styled.div`
  padding: 0 18px;
`;
const Reference = styled.span`
  padding-right: 5px;
  color: ${palette('text', 1)};
  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    padding-right: 8px;    
  }
`;

class CategoryListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderColumnContent = (col, category) => {
    const count = category.counts[col.countsIndex];
    switch (col.type) {
      case ('title'):
        return (
          <Title>
            { category.reference &&
              <Reference>{category.reference}</Reference>
            }
            {category.title}
          </Title>
        );
      case ('count'):
        return (count.accepted === null || typeof count.accepted === 'undefined')
        ? (
          <BarWrap>
            <Bar
              length={(count.public / col.maxCount) * 100}
              palette={col.entity}
            >
              <Count palette={col.entity}>
                {count.public}
              </Count>
            </Bar>
          </BarWrap>
        )
        : (
          <BarWrap secondary>
            <Bar
              length={(count.accepted / col.maxCount) * 100}
              palette={col.entity}
              secondary
            >
              <Count palette={col.entity}>
                {count.accepted}
              </Count>
            </Bar>
            { count.noted > 0 &&
              <Bar
                length={(count.noted / col.maxCount) * 100}
                palette={col.entity}
                pIndex={1}
              >
                <CountSecondary palette={col.entity}>
                  {count.noted}
                </CountSecondary>
              </Bar>
            }
          </BarWrap>
        );
      default:
        return null;
    }
  };
  render() {
    const { category, columns } = this.props;

    return (
      <Styled onClick={() => category.onLink()}>
        {
          columns.map((col, i) => (
            <Column key={i} colWidth={col.width}>
              { col.type === 'title' && category.draft &&
              <StatusWrap>
                <ItemStatus draft />
                <Clear />
              </StatusWrap>
              }
              {this.renderColumnContent(col, category)}
            </Column>
          ))
        }
      </Styled>
    );
  }
}

CategoryListItem.propTypes = {
  category: PropTypes.object,
  columns: PropTypes.array,
};

export default CategoryListItem;
