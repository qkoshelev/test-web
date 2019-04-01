import PropTypes from 'prop-types';
import React, { Component } from 'react';
import sematable, { Table } from 'sematable';
import Link from './Link';
import YesNoIconCell from './YesNoIconCell';
import DateCell from './DateCell';
import TitleCell from './TitleCell';

export const POSTS_TABLE = 'PostsTable';

const columns = [
  {
    key: 'questionId',
    header: 'ID',
    primaryKey: true,
    hidden: true,
  },
  {
    key: 'title',
    header: 'Title',
    sortable: true,
    searchable: true,
    filterable: true,
    Component: TitleCell,
    componentProps: ({ title }) => ({
      title: title,
    }),
  },
  {
    key: 'owner.display_name',
    header: 'Owner',
    sortable: true,
    filterable: true,
  },
  {
    key: 'creation_date',
    header: 'Creation date',
    sortable: true,
    searchable: false,
    Component: DateCell,
    componentProps: ({ creation_date }) => ({
      timestamp: creation_date,
    }),
  },
  {
    key: 'answered',
    header: 'Answered',
    sortable: false,
    searchable: false,
    Component: YesNoIconCell,
    componentProps: ({ answered }) => ({
      condition: answered,
    }),
  },
  {
    key: 'link',
    header: 'Link',
    sortable: false,
    searchable: false,
    Component: Link,
    componentProps: ({ link }) => ({
      link: link,
    }),
  },
];

const propTypes = {
  headers: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
};

class PostsTable extends Component {
  render() {
    return (
      <Table {...this.props} columns={columns} className="table-sm table-hover st-table" />
    );
  }
}

PostsTable.propTypes = propTypes;
export default sematable(POSTS_TABLE, PostsTable, columns, {
  selectable: false,
  defaultPageSize: 10,
  selectEnabled: () => false,
  showFilter: false,
  showPageSize: false,
});
