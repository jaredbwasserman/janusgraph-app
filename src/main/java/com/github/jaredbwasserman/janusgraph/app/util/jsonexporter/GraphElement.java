/*
Copyright (C) 2015  Scott A. Hale
Website: http://www.scotthale.net/

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/license
 */

/*
File copied from https://github.com/oxfordinternetinstitute/gephi-plugins/blob/jsonexporter-plugin/modules/JsonExporter/src/main/java/uk/ac/ox/oii/jsonexporter/model/GraphElement.java
File copied on 2021-02-08.
Copy of full license is located at licenses/jsonexporter-plugin/LICENSE.

Modifications:
The package definition was changed, but the rest of the code is unmodified.
 */

package com.github.jaredbwasserman.janusgraph.app.util.jsonexporter;

import java.util.HashMap;

/**
 * @author shale
 */
public class GraphElement {
    private HashMap<String, String> attributes;
    private String color;
    protected double size;

    public GraphElement() {
        attributes = new HashMap<String, String>();
        color = "";
    }

    public void putAttribute(String key, String value) {
        attributes.put(key, value);
    }

    public HashMap<String, String> getAttributes() {
        return attributes;
    }

    public void putAttributes(HashMap<String, String> attributes) {
        this.attributes = attributes;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public double getSize() {
        return size;
    }

    public void setSize(double size) {
        this.size = size;
    }
}
