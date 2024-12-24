<?php
function enqueue_theme_switcher_script()
{
    wp_enqueue_script('theme-switcher', get_template_directory_uri() . '/js/theme-switcher.js', array(), null, true);
    wp_enqueue_style('parent-theme-style', get_template_directory_uri() . '/style.css');
}

function my_theme_fonts()
{
    // Enqueue Google Fonts (Roboto in this example)
    wp_enqueue_style(
        'my-theme-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Italianno&family=Pacifico&display=swap',
        array(), // No dependencies
        null // No version number (optional)
    );
}

add_action('wp_enqueue_scripts', 'my_theme_fonts');
add_action('wp_enqueue_scripts', 'enqueue_theme_switcher_script');
add_action('enqueue_block_editor_assets', 'enqueue_theme_switcher_script');