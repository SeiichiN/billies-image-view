<?php
/*
 * @wordpress-plugin
 * Plugin Name: Billies Image View
 * Description: Thumbnail images viewer. Shortcode is "[insert_billies_image_view]". 大きな画像を表示したい箇所で、ショートコードを貼り付けてください。
 * Version: 0.4
 * Author: Seiichi Nukayama
 * Author URI: http://www.billies-works.com/
 */

function billies_image_view_addfiles() {
	wp_enqueue_script('view_js', plugins_url('view.js', __FILE__), array(), '1.0', true);
	wp_localize_script('view_js', 'view_vars', array(
		'path' => plugins_url('', __FILE__),
	));
  wp_enqueue_style('view.css', plugins_url('view.css', __FILE__));
}
add_action('wp_enqueue_scripts', 'billies_image_view_addfiles');

/**
 * 画面出力
 */
function dispImage() {
	ob_start();
?>
<div class="image-large-area">
<figure id="image-large">
	<figcaption id="figcap"></figcaption>
</figure>
</div>
<?php
	return ob_get_clean();
}
add_shortcode('insert_billies_image_view', 'dispImage');


/* 修正時刻: Fri Aug  6 10:30:16 2021 */
