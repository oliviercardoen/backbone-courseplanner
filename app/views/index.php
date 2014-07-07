<?php if ( isset( $title ) ):?>
	<h1 class="page-header"><?php echo $title; ?></h1>
<?php endif; ?>

<p class="lead"><?php echo ( isset( $content ) ) ? $content : ''; ?></p>

<div id="primary">
	<?php include_once 'courses/js/block-form.php'; ?>
</div>
<div id="secondary"></div>