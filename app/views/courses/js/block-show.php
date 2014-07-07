<script type="text/template" id="course-block-show">
	<div class="row">
		<div class="col-sm-8">
			<h1 class="page-header">Tous les cours > <%= name %></h1>
		</div>
		<div class="col-sm-4">
			<button class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash mr-xxsmall"></i><span class="hidden-xs">Supprimer</span></button>
			<button class="pull-right btn btn-default"><i class="glyphicon glyphicon-pencil mr-xxsmall"></i><span class="hidden-xs">Modifier</span></button>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-2 font-bold text-right">Nom</div>
		<div class="col-sm-10 mb-medium"><%= name %></div>
	</div>
	<div class="row">
		<div class="col-sm-2 font-bold text-right">Code</div>
		<div class="col-sm-10 mb-medium"><%= code %></div>
	</div>
	<div class="row">
		<div class="col-sm-2 font-bold text-right">Date de début</div>
		<div class="col-sm-10 mb-medium"><%= start_date %></div>
	</div>
	<div class="row">
		<div class="col-sm-2 font-bold text-right">Date de fin</div>
		<div class="col-sm-10 mb-medium"><%= end_date %></div>
	</div>
	<div class="row">
		<div class="col-sm-2 font-bold text-right">Annexes</div>
		<div class="col-sm-10 mb-medium"><a href="<%= reference_document %>">Dossier pédagogique</a></div>
	</div>

	<a class="btn btn-default" href="#courses"><i class="glyphicon glyphicon-arrow-left mr-xxsmall"></i>Tous mes cours</a>
</script>