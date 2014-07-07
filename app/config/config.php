<?php
$config = array(
	'menu' => array(
		'home'         => 'http://sites/apps/backbone-courseplanner',
		'courses'      => 'http://sites/apps/backbone-courseplanner/#courses',
		'curriculums'  => 'http://sites/apps/backbone-courseplanner/#curriculums',
		'schools'      => 'http://sites/apps/backbone-courseplanner/#schools',
		'locations'    => 'http://sites/apps/backbone-courseplanner/#schools/locations',
		'students'     => 'http://sites/apps/backbone-courseplanner/#students',
		'register'     => 'http://sites/apps/backbone-courseplanner/#register',
		'authenticate' => 'http://sites/apps/backbone-courseplanner/#authenticate',
		'logout'       => 'http://sites/apps/backbone-courseplanner/#logout',
		'profile'      => 'http://sites/apps/backbone-courseplanner/#profile',
	),
	'salt' => sha1( 'courseplanner' )
);