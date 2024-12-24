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

$image_url = isset($attributes['imageUrl']) ? esc_url($attributes['imageUrl']) : '';
$heading = isset($attributes['heading']) ? esc_html($attributes['heading']) : __('Your Heading Here', 'custom-blocks');
$description = isset($attributes['description']) ? esc_html($attributes['description']) : __('Your Description Here', 'custom-blocks');
$slogan = isset($attributes['slogan']) ? esc_html($attributes['slogan']) : __('Your Slogan Here', 'custom-blocks');

// Generates a unique id for accessibility purposes.
$unique_id = wp_unique_id('custom-block-');
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<div class="banner-component-main-wrapper">
		<?php if ($image_url): ?>
			<div class="banner-component-hero-image"
				style="background: url(<?php echo $image_url ?>); background-size: cover; background-repeat: no-repeat; background-position: center center">
			</div>
		<?php endif; ?>
		<div class="banner-component-content-wrapper">
			<h2><?php echo $heading; ?></h2>

			<p><?php echo $description; ?></p>

			<p class="slogan"><strong><em><?php echo $slogan; ?></em></strong></p>
			<a href="/shop">Shop Now</a>
		</div>
	</div>
</div>