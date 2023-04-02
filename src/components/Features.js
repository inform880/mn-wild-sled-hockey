import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.name} className="column is-4">
        <section className="m-1">
          <PreviewCompatibleImage imageInfo={item} />
          <h3 className="has-text-weight-semibold is-size-5">{item.name}</h3>
          <p className="subtitle">{item.position}</p>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      position: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
