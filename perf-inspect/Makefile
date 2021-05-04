all:
	./node_modules/protobufjs/bin/pbjs -t static --wrapper closure --es6 --force-long $(GOPATH)/src/github.com/tracecap/tracecap/tracecap.proto -o src/tracecap-proto.js
	./node_modules/protobufjs/bin/pbts -o src/tracecap-proto.d.ts src/tracecap-proto.js
