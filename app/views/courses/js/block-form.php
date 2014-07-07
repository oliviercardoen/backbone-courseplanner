<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
				<h4 class="modal-title" id="myModalLabel">Ajouter un nouveau cours</h4>
			</div>
			<div class="modal-body">
				<form class="form-horizontal" id="course-form" role="form" action="" method="POST">
					<div class="form-group">
						<label for="course-name" class="col-sm-4 control-label">Nom</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="course-name" name="course-name" value="" placeholder="...">
						</div>
					</div>
					<div class="form-group">
						<label for="course-code" class="col-sm-4 control-label">Code</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" id="course-code" name="course-code" value="" placeholder="UF XXX...">
						</div>
						<div class="col-md-4"></div>
					</div>
					<div class="form-group">
						<label for="course-start_date" class="col-sm-4 control-label">Date de début</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="course-start_date" name="course-start_date" value="" placeholder="AAAA-MM-JJ...">
						</div>
					</div>
					<div class="form-group">
						<label for="course-end_date" class="col-sm-4 control-label">Date de fin</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="course-end_date" name="course-end_date" value="" placeholder="AAAA-MM-JJ...">
						</div>
					</div>
					<div class="form-group">
						<label for="course-reference_document" class="col-sm-4 control-label">Dossier pédagogique</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="course-reference_document" name="course-reference_document" value="" placeholder="http://www.mondossier.cfweb.be...">
						</div>
					</div>
					<?php /*if ( !empty ( $curriculums ) ): ?>
						<div class="form-group">
							<label for="course-curriculum_id" class="col-sm-2 control-label">Formations</label>
							<div class="col-sm-10 pt-xsmall">
								<?php foreach( $curriculums as $curriculum ): ?>
									<?php if ( isset( $course ) ): ?>
										<?php $checked = ( $course->isRelatedCurriculum( $curriculum->id ) ) ? ' checked="checked"' : '' %>
									<?php endif %>
									<p><input type="checkbox" name="course-curriculum_id[]" value="<%= $curriculum->id %>" <%= $checked %>> <%= $curriculum->name %></p>
								<?php endforeach %>
							</div>
						</div><!-- .checkbox -->
					<?php endif;*/ ?>
					<div class="form-group">
						<div class="col-sm-offset-4 col-md-12">
							<button type="submit" class="btn btn-default">Enregistrer</button>
							<a class="ml-xsmall" href="#index" data-dismiss="modal">Annuler</a>
						</div>
					</div>
				</form>
			</div>
			<!--div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary">Save changes</button>
			</div-->
		</div>
	</div><!-- .modal-dialog -->
</div><!-- .modal -->