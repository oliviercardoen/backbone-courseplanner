<script type="text/template" id="course-list-item">
	<td class="hidden-xs"><%= code %></td>
	<td>
		<% if (typeof(id) !== "undefined") { %>
			<a href="#courses/<%= id %>"><%= name %></a>
		<% } else { %>
			<a href="#courses/"><%= name %></a>
		<% } %>
	</td>
	<td class="hidden-xs"><%= start_date %></td>
	<td class="hidden-xs"><%= end_date %></td>
	<td class="hidden-xs"><a href="<%= reference_document %>" target="_blank">Dossier pédagogique<i class="glyphicon glyphicon-share-alt ml-xxsmall"></i></a></td>
	<td class="text-right hidden-xs">
		<button class="btn btn-default btn-sm ml-xxsmall edit"><i class="glyphicon glyphicon-pencil"></i></button>
		<button class="btn btn-danger btn-sm ml-xxsmall delete"><i class="glyphicon glyphicon-trash"></i></button>
	</td>
</script>