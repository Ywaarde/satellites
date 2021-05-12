import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage } from '../actions/filters';

export class Pagination extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      totalMissions: '',
      totalPages: '',
      currentPage: '',
      pages: ''
    };
  }

  componentDidMount() {
    this.setState({
      totalMissions: this.props.missions.length,
      totalPages: Math.ceil(this.props.missions.length / this.props.filters.perPage),
      currentPage: this.props.filters.page
    });
  }

  setPage(page) {
    if (page < 1) {
      page = 1;
    } else if (page > this.state.totalPages) {
      page = this.state.totalPages;
    }

    this.setState({
      currentPage: page
    });

    this.props.onChangePage(page);
  }

  getPager() {
    let pages = []

    for (let i = 1; i <= this.state.totalPages; i++) {
      pages.push(i);
    }
    return {
      pages
    };
  }

  render() {
    var pager = this.getPager();

    return (
      <p className="pagination">
        <button
          disabled={this.state.currentPage === 1}
          onClick={() => this.setPage(1)}
        >
          First
          </button>
        <button
          disabled={this.state.currentPage === 1}
          onClick={() => this.setPage(this.state.currentPage - 1)}
        >
          Previous
          </button>
        {pager.pages.map((page) => (
          <button
            key={page}
            className={this.state.currentPage === page ? "active" : ""}
            onClick={() => this.setPage(page)}
          >
            {page}
          </button>
        ))}
        <button
          disabled={this.state.currentPage === this.state.totalPages}
          onClick={() => this.setPage(this.state.currentPage + 1)}
        >
          Next
          </button>

        <button
          disabled={this.state.currentPage === this.state.totalPages}
          onClick={() => this.setPage(this.state.totalPages)}
        >
          Last
          </button>
      </p>
    );
  }
}

const mapStateToProps = (state, props) => ({
  missions: state.missions,
  filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  onChangePage: (page) => dispatch(setCurrentPage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)