<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$image_url   = isset( $attributes['imageUrl'] ) ? esc_url( $attributes['imageUrl'] ) : '';
$heading     = isset( $attributes['heading'] ) ? esc_html( $attributes['heading'] ) : __( 'Your Heading Here', 'custom-blocks' );
$description = isset( $attributes['description'] ) ? esc_html( $attributes['description'] ) : __( 'Your Description Here', 'custom-blocks' );
$slogan      = isset( $attributes['slogan'] ) ? esc_html( $attributes['slogan'] ) : __( 'Your Slogan Here', 'custom-blocks' );

// Generates a unique id for accessibility purposes.
$unique_id = wp_unique_id( 'custom-block-' );
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php if ( $image_url ) : ?>
		<img src="<?php echo $image_url; ?>" alt="<?php esc_attr_e( 'Uploaded Image', 'custom-blocks' ); ?>" />
	<?php endif; ?>

	<h2><?php echo $heading; ?></h2>

	<p><?php echo $description; ?></p>

	<p class="slogan"><?php echo $slogan; ?></p>
</div>
