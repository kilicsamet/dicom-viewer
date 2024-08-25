build-ui:
	docker build . -t dicom-viewer_ui

run-dev:
	docker-compose down
	docker-compose up -d

