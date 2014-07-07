<?php if ( isset( $title ) ):?>
	<h1 class="page-header"><?php echo $title; ?></h1>
<?php endif; ?>

<p class="lead"><?php echo ( isset( $content ) ) ? $content : ''; ?></p>
<?php include_once 'courses/js/block-form.php'; ?>
<div id="primary"></div>
<div id="secondary"></div>