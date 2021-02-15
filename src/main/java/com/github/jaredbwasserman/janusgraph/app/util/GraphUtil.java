package com.github.jaredbwasserman.janusgraph.app.util;

import com.github.jaredbwasserman.janusgraph.app.util.jsonexporter.JSONExporter;
import org.gephi.io.exporter.api.ExportController;
import org.gephi.io.importer.api.Container;
import org.gephi.io.importer.api.ImportController;
import org.gephi.io.importer.plugin.file.ImporterGraphML;
import org.gephi.io.processor.plugin.DefaultProcessor;
import org.gephi.project.api.ProjectController;
import org.gephi.project.api.Workspace;
import org.openide.util.Lookup;

import java.io.ByteArrayInputStream;
import java.io.StringWriter;

// TODO: Add tests
// TODO: Logging?

public class GraphUtil {

    // TODO: Should the return type be an object node or leave as String?
    public static String graphMLToJSON(byte[] bytes) {
        // Init a project - and therefore a workspace
        ProjectController pc = Lookup.getDefault().lookup(ProjectController.class);
        pc.newProject();
        Workspace workspace = pc.getCurrentWorkspace();

        // Import file
        ImportController importController = Lookup.getDefault().lookup(ImportController.class);
        Container container;
        try {
            container = importController.importFile(new ByteArrayInputStream(bytes), new ImporterGraphML());
        } catch (Exception e) {
            e.printStackTrace(); // TODO: Log
            return "";
        }

        // Append imported data to GraphAPI
        importController.process(container, new DefaultProcessor(), workspace);

        // Export graph
        ExportController exportController = Lookup.getDefault().lookup(ExportController.class);
        StringWriter stringWriter = new StringWriter();
        try {
            exportController.exportWriter(stringWriter, new JSONExporter());
        } catch (Exception e) {
            e.printStackTrace(); // TODO: Log
            return "";
        }

        return stringWriter.toString();
    }
}
