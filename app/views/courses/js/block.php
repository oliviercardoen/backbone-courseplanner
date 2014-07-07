<script type="text/template" id="course-block">
	<div class="row">
		<div class="col-sm-10 col-xs-9">
			<%= title %>
		</div>
		<div class="col-sm-2 col-xs-3">
			<button class="pull-right btn btn-default" data-toggle="modal" data-target="#myModal"><i class="glyphicon glyphicon-plus mr-xxsmall"></i><span class="hidden-xs">Ajouter</span></button>
		</div>
	</div>
	<table class="table" id="course-table">
		<thead>
			<tr>
				<th class="hidden-xs">Code</th>
				<th>Nom du cours</th>
				<th class="hidden-xs">Début</th>
				<th class="hidden-xs">Fin</th>
				<th class="hidden-xs">Annexes</th>
				<th class="hidden-xs"></th>
			</tr>
		</thead>
	</table>
</script>