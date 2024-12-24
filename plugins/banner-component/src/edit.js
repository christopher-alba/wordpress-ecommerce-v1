/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
  useBlockProps,
  MediaUpload,
  InspectorControls,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  Button,
  Placeholder,
} from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const { imageUrl, heading, description, slogan } = attributes;

  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "custom-blocks")}>
          <TextControl
            label={__("Heading", "custom-blocks")}
            value={heading}
            onChange={(value) => setAttributes({ heading: value })}
          />
          <TextControl
            label={__("Description", "custom-blocks")}
            value={description}
            onChange={(value) => setAttributes({ description: value })}
          />
          <TextControl
            label={__("Slogan", "custom-blocks")}
            value={slogan}
            onChange={(value) => setAttributes({ slogan: value })}
          />
          <MediaUpload
            onSelect={(media) => setAttributes({ imageUrl: media.url })}
            allowedTypes={["image"]}
            render={({ open }) => (
              <Button onClick={open} variant="primary">
                {__("Upload Image", "custom-blocks")}
              </Button>
            )}
          />
        </PanelBody>
      </InspectorControls>
      <div className="custom-block-content">
        {!imageUrl ? (
          <Placeholder
            label={__("Image", "custom-blocks")}
            instructions={__(
              "Click the button to upload an image.",
              "custom-blocks"
            )}
          >
            <MediaUpload
              onSelect={(media) => setAttributes({ imageUrl: media.url })}
              allowedTypes={["image"]}
              render={({ open }) => (
                <Button onClick={open} variant="primary">
                  {__("Upload Image", "custom-blocks")}
                </Button>
              )}
            />
          </Placeholder>
        ) : (
          <img src={imageUrl} alt={__("Uploaded Image", "custom-blocks")} />
        )}
        <h2>{heading || __("Your Heading Here", "custom-blocks")}</h2>
        <p>{description || __("Your Description Here", "custom-blocks")}</p>
        <p className="slogan">
          {slogan || __("Your Slogan Here", "custom-blocks")}
        </p>
      </div>
    </div>
  );
}
