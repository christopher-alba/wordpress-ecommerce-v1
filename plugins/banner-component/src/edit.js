import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  MediaUpload,
  InspectorControls,
} from "@wordpress/block-editor";
import { Button, PanelBody, TextControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { imageUrl, heading, description, slogan } = attributes;

  const blockProps = useBlockProps();

  return (
    <>
      {/* Sidebar controls for block settings */}
      <InspectorControls>
        <PanelBody title={__("Banner Settings", "custom-blocks")}>
          {/* Image Upload */}
          <MediaUpload
            onSelect={(media) => setAttributes({ imageUrl: media.url })}
            allowedTypes={["image"]}
            value={imageUrl}
            render={({ open }) => (
              <Button onClick={open} variant="secondary">
                {__("Select Image", "custom-blocks")}
              </Button>
            )}
          />
          <TextControl
            label={__("Heading", "custom-blocks")}
            value={heading}
            onChange={(value) => setAttributes({ heading: value })}
            placeholder={__("Your Heading Here", "custom-blocks")}
          />
          <TextControl
            label={__("Description", "custom-blocks")}
            value={description}
            onChange={(value) => setAttributes({ description: value })}
            placeholder={__("Your Description Here", "custom-blocks")}
          />
          <TextControl
            label={__("Slogan", "custom-blocks")}
            value={slogan}
            onChange={(value) => setAttributes({ slogan: value })}
            placeholder={__("Your Slogan Here", "custom-blocks")}
          />
        </PanelBody>
      </InspectorControls>

      {/* Block content for the editor */}
      <div {...blockProps}>
        <div className="banner-component-main-wrapper">
          {imageUrl && (
            <div
              className="banner-component-hero-image"
              style={{
                background: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            ></div>
          )}
          <div className="banner-component-content-wrapper">
            <h2>{heading || __("Your Heading Here", "custom-blocks")}</h2>
            <p>{description || __("Your Description Here", "custom-blocks")}</p>
            <p className="slogan">
              <strong>
                <em>{slogan || __("Your Slogan Here", "custom-blocks")}</em>
              </strong>
            </p>
            <a className="shop-now-link" href="/shop">
              {__("Shop Now", "custom-blocks")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
