import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStationQuery, graphql } from 'gatsby';

const Seo = ({ title }) => {
	return (
		<Helmet title={title}></Helmet>
	);
}

export default Seo;
